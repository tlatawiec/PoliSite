export default function Footer() {

  return (
    <footer>
      <div className="mx-auto flex pt-12 justify-center">
        <div className="w-96 text-center">
          <a className="footer-link" href="https://github.com/tlatawiec/PoliTracker">Github</a>
        </div>
        
        <span className="text-blue text-xl mx-4">&#8226;</span>
        <div className="w-96 text-center">
          <a className="footer-link" href="/">Terms of Service</a>
        </div>
      </div>

      <div className="mx-auto text-center text-sm py-4 text-gray-500">© 2024 PoliAPI</div>
    </footer>
  )
}