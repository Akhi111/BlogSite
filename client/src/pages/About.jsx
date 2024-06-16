const About = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className=" max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">About {"Akhil's"} Blog</h1>
          <div className=" text-md text-gray-500 flex flex-col gap-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English.
            </p>
            <p>
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which {"don't"} look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there {"isn't"} anything embarrassing hidden in the
              middle of text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
