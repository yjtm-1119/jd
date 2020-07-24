import React from 'react';
import { renderRoutes } from "react-router-config";
import { TabItem, Tab } from './TabLayout.style';
import { NavLink } from 'react-router-dom';
function Home(props) {
  const { route } = props;
  return (
    <>
      <Tab>
        <NavLink to="/index" activeClassName="selected">
          <TabItem>
            <span>
              <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png" alt="" />
            </span>
          </TabItem>
        </NavLink>
        <NavLink to="/sort" activeClassName="selected">
          <TabItem>
            <span>
              <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png" alt="" />
            </span>
          </TabItem>
        </NavLink>
        <NavLink to="/find" activeClassName="selected">
          <TabItem>
            <span>
              <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png" alt="" />
            </span>
          </TabItem>
        </NavLink>
        <NavLink to="/cart" activeClassName="selected">
          <TabItem>
            <span>
              <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png" alt="" />
            </span>
          </TabItem>
        </NavLink>
        <NavLink to="/mine" activeClassName="selected">
          <TabItem>
            <span>
              <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png" alt="" />
            </span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </>
  )
}

export default React.memo(Home);
