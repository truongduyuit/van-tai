import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";

export const ZaloPlugin: React.FC = () => {
  return (
    <Box marginRight="-100px">
      <Script src="https://sp.zalo.me/plugins/sdk.js"></Script>

      <div
        className="zalo-chat-widget"
        data-oaid="579745863508352884"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!"
        data-autopopup="5"
        data-width="300"
        data-height="300"
        style={{
          right: "24px",
          bottom: "48px",
        }}
      ></div>
    </Box>
  );
};
