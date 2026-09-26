import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  interest: z.enum(["General enquiry", "RERA verification", "District franchise", "Escrow guidance"]),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().default(""),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { website: _website, ...record } = data;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert(record);
    if (error) throw new Error("Your enquiry could not be sent. Please try again.");
    return { success: true };
  });
