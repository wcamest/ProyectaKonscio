import React from 'react'
import Editor from "./Editor";
import mockPage from "./mock.json";

type Props = {}

const page = (props: Props) => {
  return (
    <Editor pageData={mockPage} />
  )
}

export default page