import * as React from "react";
import * as $ from 'jquery';

export interface LocationProps { display: string }

interface LocationState { 
    display: string;
    key: string;
}

export class Location extends React.Component<LocationProps,LocationState> {
    ul: JQuery;

    constructor(props: any) { 
        super(props);
        this.state = {
            display: this.props.display,
            key: 'test'
        }
    }
    render() {
        const data = ['Taipei','Kaoshiung'];
        let locationList = data.map(function (city,i) {
            return <LocationList location={city} key={i}/>;
        })

        return <ul onClick={this.HideChildNode.bind(this)} style={{ display: this.state.display }} className={this.state.key}>{locationList}</ul>
    };

    HideChildNode(e:Event) { 
        e.preventDefault();
    }
}

interface LocationListProps {
    location: string;
    key: number;
}

interface LocationListState { 
    display: string;
}

class LocationList extends React.Component<LocationListProps, LocationListState> { 
    constructor(props:any) {
        super(props);
        this.state = {
            display: "block"
        };
    }
    render() {
        return <li className="location" style={{display: this.state.display}}>{this.props.location}</li>;
    }
}