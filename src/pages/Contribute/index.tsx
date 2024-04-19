import pixImg from '@images/pix.png'

export function Contribute() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="mx-auto flex w-1/2 flex-col items-center justify-center">
        <h2 className="mb-4 flex items-center gap-2 text-center text-xl font-bold text-text">
          Scan or click the QR code
        </h2>
        <figure>
          <a
            target="_blank"
            href="https://www.qrcodepress.com/wp-content/uploads/2014/09/QR-code-detective-when-not-to-use.jpg"
            rel="noreferrer"
          >
            <img src={pixImg} alt="" />
          </a>
          <figcaption className="text-center text-text"></figcaption>
        </figure>
        <div className="mt-4">
          <span className="block text-center text-sm font-bold text-text">
            or copy the PIX key
          </span>
          <span className="block text-center text-xl font-bold text-purple">
            https://echozoneph.online
          </span>
        </div>
      </div>
    </div>
  )
}
