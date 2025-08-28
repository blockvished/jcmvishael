import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EMail() {
  return (
    <a href="mailto:jcmvishael@gmail.com">
      <Button variant="outline" className="flex items-center gap-2">
        <Mail className="h-5 w-5" />
      </Button>
    </a>
  );
}
