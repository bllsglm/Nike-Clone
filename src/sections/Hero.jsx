import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const Hero = () => {
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center border-2 gap-10 max-container min-h-screen"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p>Our summer Collections</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality, comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconUrl={arrowRight}/>

      </div>

    </section>

    )
}

export default Hero