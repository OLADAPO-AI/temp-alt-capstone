import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/Logo1.png"
            alt="Carefinder Logo"
            width={50}
            height={50}
          />
          <span className="ml-2 text-2xl font-bold text-blue-600">
            Carefinder
          </span>
        </div>
      </Link>
    </div>
  )
}

export default Logo
