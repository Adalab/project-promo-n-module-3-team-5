import "../styles/components/Design.scss";

function Design(props) {
  //función que tiene que ser llamada cuando esta sección se colapse o despliegue
  const handleCollapse = props.handleCollapse;
  const collapseDesign = props.collapseDesign;
  const handlePalette = props.handlePalette;
  return (
    <div>
      <div
        className="collapsable js_collapsable_design"
        onClick={handleCollapse}
      >
        <i className="far fa-object-ungroup cloningicon collapsable__iconStart"></i>
        <h3 className="collapsable__title">Diseña</h3>
        <i
          className={
            "fas fa-chevron-" +
            (collapseDesign === "hidden" ? "down" : "up") +
            " collapsable__iconEnd js_iconEnd"
          }
        ></i>

        <section className="wholecollapsable-design  js_section " id="desing">
          {/*   <div className='titledesignflex'>
  <i className='far fa-object-ungroup cloningicon'></i>
  <h3 className='titledesign'>diseña</h3>
  <i className='fas fa-chevron-up arrowdesign'></i>
</div> */}
          <div className="rectangle-2"></div>
          <fieldset className={collapseDesign + " flexboxdesign"}>
            <h4 className="titlecolours">colores</h4>
            <div>
              <div className="colourboxesmaster js_designevent">
                <label className="label__design" htmlFor="palette-1">
                  <input
                    id="palette-1"
                    className="design__input js_design"
                    type="radio"
                    value="1"
                    name="palette"
                    onChange={handlePalette}
                    // checked={palette}
                  />
                  <ul className="colourboxes colourone">
                    <li className="item1-item1 li">Color A</li>
                    <li className="item1-item2 li">Color B</li>
                    <li className="item1-item3 li">Color C</li>
                  </ul>
                </label>
              </div>
              <label className="label__design" htmlFor="palette-2">
                <input
                  id="palette-2"
                  className="design__input js_design"
                  type="radio"
                  value="2"
                  name="palette"
                  onChange={handlePalette}
                  // checked={palette}
                />
                <ul className="colourboxes colourtwo">
                  <li className="item2-item1 li">Color A</li>
                  <li className="item2-item2 li">Color B</li>
                  <li className="item2-item3 li">Color C</li>
                </ul>
              </label>
              <label className="label__design" htmlFor="palette-3">
                <input
                  id="palette-3"
                  className="design__input js_design"
                  type="radio"
                  value="3"
                  name="palette"
                  onChange={handlePalette}
                  // checked={palette}
                />
                <ul className="colourboxes colourthree">
                  <li className="item3-item2 li">Color B</li>
                  <li className="item3-item1 li">Color A</li>
                  <li className="item3-item3 li">Color C</li>
                </ul>
              </label>
            </div>
          </fieldset>
        </section>
      </div>
    </div>
  );
}

export default Design;
