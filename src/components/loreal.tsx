import Button from "./button";

function footer() {
  return (
    <div className="flex  bg-slate-500 text-white p-10 h-[450px]">
      <div className="w-[750px] p-4 leading-9">
        <div>
          <h1 className="text-2xl">Don't miss out</h1>
          <p>
            {" "}
            Sign up for the latest beauty news, product samples and coupons
          </p>
        </div>

        <div className="">
          <label>
            Email Address
            <span>*</span>
          </label>
          <input placeholder="Enter Your Email Address" type="text" />
          </div>
          <div>
          <label>
            Birthday
            <span>*</span>
          </label>
          <input type="date" />
        </div>
        <div>
          <Button
            label="Sign Up"
            className="border w-full p-1"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
            aliquid.
          </p>
        </div>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
          <a href="#youtube">Youtube</a>
        </div>
      </div>
      <div className="flex leading-7">
        <div>
          <p className="text-2xl">Company</p>
          <a href="#">About</a>
          <a href="#">Experts and supermodels</a>
        </div>
        <div>
          <p className="text-2xl">Customer Service</p>
          <a href="#">My Account</a>
          <a href="#">Store Locator</a>
          <a href="#">Reedem Rewards</a>
        </div>
        <div>
          <p className="text-2xl">More To Explore</p>
          <a href="#">Beauty Magazines</a>
          <a href="#">Tools and consultation</a>
          <a href="#">Offers</a>
        </div>
      </div>

      <div className="absolute bottom-0">
        <nav>
          <a href="#"> site map</a>
          <a href="#"> privacy</a>
          <a href="#">terms</a>
          <a href="#">makeup.com</a>
          <a href="#">skincare.com</a>
        </nav>
        <div className="">
          <p>@2024 Favour</p>
          <a href="#">Back to top</a>
        </div>
      </div>
    </div>
  );
}

export default footer;
