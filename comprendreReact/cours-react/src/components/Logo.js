import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importes depuis la balise IMG sont accessibles depuis public donc il faut just 
      faire ./nom_img ou ./nom_dossier/nom_img */}
      <img src="./baliseImg/logo192.png" alt="Logo React" />
      <h3>Hello World</h3>
    </div>
  );
};

export default Logo;
