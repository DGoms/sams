import DocumentRenderDownload from './DocumentRenderDownload.vue'
import DocumentRenderOffice from './DocumentRenderOffice.vue'
import DocumentRenderPdf from './DocumentRenderPdf.vue'
import DocumentRenderImg from './DocumentRenderImg.vue'

export const DocumentRender = [
  {
    pattern: /(doc|docx|ppt|pptx|xlsx|ppsx|dotx)/gi,
    component: DocumentRenderOffice
  },
  {
    pattern: /(pdf)/gi,
    component: DocumentRenderPdf
  },
  {
    pattern: /(odp)/gi,
    component: DocumentRenderOffice
  },
  {
    pattern: /(png|jpg|jpeg)/gi,
    component: DocumentRenderImg
  },
  {
    pattern: /.*/gi,
    component: DocumentRenderDownload
  }
]

export const getDocumentRenderer = (path: string) => {
  const pathSplited = path.split('.')

  const extension = pathSplited[pathSplited.length - 1]

  const theDocRenderer = DocumentRender.find((docRender) => extension.match(docRender.pattern))

  console.log(path, theDocRenderer)
  return (theDocRenderer || DocumentRender[DocumentRender.length - 1]).component
}

export interface DocumentRenderProps {
  path: string
}
