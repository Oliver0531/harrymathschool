import * as React from "react";
import * as ReactDOM from "react-dom";

import * as $ from 'jquery';

import { Location } from "./components/mapleft";


ReactDOM.render(
    <Location display="block"/> ,
    document.getElementById("googleMap")
);