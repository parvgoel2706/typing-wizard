import "./OverlayBack.css";

export default function OverlayBack({Status}) {

  return <div id="OverlayBack" className={(Status==="start"||Status==="end")?null:"hideBack"}>
  </div>;
}
