import Image from "antd/lib/image";
import "antd/lib/image/style/index.css";
import React from "react";

// 使用按需加载方式引入 antd 组件
// 引入 Image 组件的时候，除了组件本身的样式
// 还需要引入 lib/style/default.css 中动画的样式
// 否则图片放大没有动画效果，并且无法关闭
// 但全量引入 default.css 会与 docusaurus 样式冲突
// 因此这边把需要的样式单独拿出来放到 src/css/custom.css 下面

type IProps = {
  src: string;
  width?: number;
}

const Illustration: React.FC<IProps> = ({ src, width }) => {
  return (
    <Image
      width={width}
      src={src}
    />
  )
}

export default Illustration;