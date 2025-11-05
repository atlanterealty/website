import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("access_key", "66c033bd-706a-4757-8481-52b8a811bd47");
      formData.append("email", data.email);
      formData.append("subject", "Newsletter Subscription - Atlante Realty");
      formData.append("message", `New newsletter subscription from: ${data.email}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center p-4 bg-primary/10 rounded-xl text-primary text-sm">
        ✓ Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex" data-testid="newsletter-form">
      <Input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-gray-800 border-gray-700 rounded-l-xl focus:ring-primary text-white"
        {...form.register("email")}
        disabled={isSubmitting}
        data-testid="input-newsletter-email"
      />
      <Button
        type="submit"
        className="gradient-gold text-white rounded-r-xl hover:opacity-90 transition-opacity px-6"
        disabled={isSubmitting}
        data-testid="button-newsletter-submit"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
      </Button>
    </form>
  );
}
