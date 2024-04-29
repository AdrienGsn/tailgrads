import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const ENV = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production", "test"]),
    },
    client: {
        NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
        NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID: z.string().optional(),
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION:
            process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID:
            process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID,
    },
});

export default ENV;
