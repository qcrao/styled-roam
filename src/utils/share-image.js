import html2canvas from 'html2canvas'

const replaceAsImage = (imgUrl) => {
  const shareImage = document.querySelector('img.share-card')
  shareImage.src = imgUrl
}

export const downloadImage = (imageUrl, memo) => {
  const anchorElement = document.createElement('a')
  anchorElement.href = imageUrl
  anchorElement.download = memo.username + '-' + memo.uid + '.png'

  const event = document.createEvent('MouseEvents')
  event.initEvent('click', true, true)

  anchorElement.dispatchEvent(event)
}
function reset() {
  document.querySelector('#share-card-header').remove()
  document.querySelector('#share-card-footer').remove()
  document.querySelector('.share-memex-container').classList.remove('share-memex-container')
}

export async function shareImage(memo) {
  const node = document.querySelector('.share-memex-container')
  const originalStyles = node.style.cssText // 保存原始样式
  // node.style.width = '320px'
  node.style.setProperty('width', '320px', 'important')
  // node.style.setProperty('height', '100px', 'important')

  // 延迟以确保样式应用和元素重绘
  // await new Promise((resolve) => setTimeout(resolve, 1500))

  // 生成图片
  const canvas = await html2canvas(node, {
    logging: false,
    scale: 3,
    useCORS: true,
    letterRendering: true,
    backgroundColor: '#FEFCF6',
  })

  const imageSrc = canvas.toDataURL('image/png', 1)

  // replaceAsImage(imageSrc);
  downloadImage(imageSrc, memo)
  // reset header and footer
  node.style.cssText = originalStyles
  reset()
  return imageSrc
}
