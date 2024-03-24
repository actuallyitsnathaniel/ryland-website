import PressHighlight from "../../components/press-highlight";

const Press = () => {
  return (
    <div className="flex flex-wrap flex-col items-center text-white py-10">
      <h1 className="font-semibold underline under pb-3">Press Highlights</h1>
      <div className="flex text-center items-middle my-auto">
        <div>
          <PressHighlight
            title={"Meet Thomas Wagstaffe | Lead Singer of Ryland"}
            subtitle={"Write-up by 'Shoutout LA'"}
            url={
              "https://shoutoutla.com/meet-thomas-wagstaffe-lead-singer-of-ryland/"
            }
          />
          <PressHighlight
            title={"RYLAND"}
            subtitle={"Write-up by 'The Artist I Am'"}
            url={"https://theartistiam.cargo.site/ryland-1"}
          />
        </div>
      </div>
    </div>
  );
};

export default Press;
