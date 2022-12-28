import { IconMail, Input } from "@wesbitty/ui";

export default function InputBasic() {
  return (
    <Input
      label="Email"
      placeholder="john@digweed.com"
      icon={<IconMail />}
      type="email"
    />
  );
}
