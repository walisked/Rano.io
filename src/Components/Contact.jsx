import React from 'react'
import { FacebookIcon, FacebookShareButton, LineShareButton, LinkedinIcon, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

export const Contact = () => {
  return (
    <>
         <div className="flex justify-center items-center gap-6 my-6">
                  <FacebookShareButton
                  url={"https://www.facebook.com/walisked.omar?mibextid=ZbWKwL"}
                  quote={"TimeLIne"}
                  hashtag="Walisked">
                    <FacebookIcon size={32} round/>
                  </FacebookShareButton>
                  <TwitterShareButton
                  url={"https://x.com/OmarWalisked?t=MoPnxNRJNTRghzVp9pzgcQ&s=09"}
                  quote={"TimeLIne"}
                  hashtag="Walisked">
                    <TwitterIcon size={32} round/>
                  </TwitterShareButton>
                  <WhatsappShareButton
                  url={"https://www.facebook.com/walisked.omar?mibextid=ZbWKwL"}
                  quote={"TimeLIne"}
                  hashtag="Walisked">
                    <WhatsappIcon size={32} round/>
                  </WhatsappShareButton>
                  <LineShareButton
                  url={"https://www.linkedin.com/in/umar-ayuba-rano-90157b22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                  quote={"TimeLIne"}
                  hashtag="Walisked">
                    <LinkedinIcon size={32} round/>
                  </LineShareButton>
                </div>
    </>
  )
}
