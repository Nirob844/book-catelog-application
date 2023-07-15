export default function Banner() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-6xl font-black text-white mb-2">
              DISCOVER <br /> BOOKS WORLD
            </h1>
            <p className="text-white font-semibold text-xl">
              Welcome to Book Catalog!
            </p>
            <div className="text-white mt-20">
              <p>The Prophet Muhammad said</p>
              <q>
                Whoever teaches some knowledge will have the reward of the one{" "}
                <br /> who acts upon it, without that detracting from his reward
                in the slightest.
              </q>
            </div>
            <button className="mt-5 border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white font-[500] px-[12px] py-[4px] rounded-[8px]">
              Learn more
            </button>
          </div>
          <div className="">
            <img
              height="600px"
              width="600px"
              className="rounded-[14px]"
              src="https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
