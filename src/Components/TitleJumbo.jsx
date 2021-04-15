import profpic from "../Assets/ProfileCropped.jpg";

const TitleJumbo = () => {
  return (
    <>
      <div className="namePlateParent">
        <div className="namePlateChildText">
          <h1>Michael</h1>
          <h1>Ryan</h1>
          <h1>Goad</h1>
        </div>
        <div className="namePlateChildPicture">
          <img src={profpic} alt="Profile"></img>
        </div>
      </div>
    </>
  );
};

export default TitleJumbo;
