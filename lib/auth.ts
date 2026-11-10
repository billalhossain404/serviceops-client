import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI as string, );
const db = client.db("ServiceOpsDB");

export const auth = betterAuth({

    emailAndPassword: { 
    enabled: true, 
  }, 

  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },

        microsoft: { 
            clientId: process.env.MICROSOFT_CLIENT_ID as string, 
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string, 
            // Optional
            tenantId: 'common', 
            authority: "https://login.microsoftonline.com", // Authentication authority URL
            prompt: "select_account", // Forces account selection
        }, 


  database: mongodbAdapter(db, {
    client,
  }),
});