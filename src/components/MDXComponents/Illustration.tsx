import Image from "antd/lib/image";
import "antd/lib/image/style/index.css";
import React from "react";
import { useInView } from "react-intersection-observer";

// 使用按需加载方式引入 antd 组件
// 引入 Image 组件的时候，除了组件本身的样式
// 还需要引入 lib/style/default.css 中动画的样式
// 否则图片放大没有动画效果，并且无法关闭
// 但全量引入 default.css 会与 docusaurus 样式冲突
// 因此这边把需要的样式单独拿出来放到 src/css/custom.css 下面

type IProps = {
  src: string;
  width?: number;
  alt?: string;
}

const Illustration: React.FC<IProps> = ({ src, width, alt }) => {
  const [imageSrc, setImageSrc] = React.useState<string>();
  const [ref, inView, entry] = useInView({ triggerOnce: true })

  React.useEffect(() => {
    inView && setImageSrc(src);
  }, [inView]);

  // 函数组件不能像类组件一样接受 ref
  // 函数组件的 ref 只能用在 dom 元素上
  // 如果想在父组件中获取子组件的 ref
  // 可以使用 React.forwardRef 转发
  // 由于 antd 的 Image 组件没有 forwardRef
  // 因此这边在外面包裹了一个 div 用于获取 ref

  return (
    <div className="image-wrapper" ref={ref}>
      <Image
        width={width}
        src={imageSrc}
        alt={alt}
      />
    </div>
  )
}

export default Illustration;