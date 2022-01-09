import * as React from "react";

const Collapse: React.FC<{}> = ({ children }) => {
  return (
    <details>
      <summary>查看详情</summary>
      {children}
    </details>
  )
}

export default React.memo(Collapse);
