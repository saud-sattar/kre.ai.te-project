import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
   res.send("Hello from me!");
});

router.route("/").post(async (req, res) => {
   try {
      const { prompt } = req.body;

      const aiResponse = await openai.images.generate({
         prompt,
         n: 1,
         size: "1024x1024",
         response_format: "b64_json",
      });

      const image = aiResponse.data[0].b64_json;

      res.status(200).json({ photo: image });
   } catch (error) {
      console.log(error);

      if (error.code === "billing_hard_limit_reached") {
         res.status(400).json({
            error: "Billing limit reached. Please update your OpenAI account.",
         });
      } else if (error.message === "No image data returned from the API.") {
         res.status(500).json({
            error: "Failed to generate image. Try again later.",
         });
      } else {
         res.status(500).json({
            error:
               error?.response?.data?.error?.message ||
               "An unexpected error occurred.",
         });
      }
   }
});

export default router;
