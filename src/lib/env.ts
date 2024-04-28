import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const ENV = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production", "test"]),
        ADSENSE_CLIENT_ID: z.string(),
    },
    experimental__runtimeEnv: {},
});

export default ENV;
