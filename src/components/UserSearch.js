import React, { Component } from "react";
import EmpArea from "./EmpArea";
import API from "../utils/API";

class UserSearch extends Component {
  state = {
    search: "",
    sort: "",
    results: [],
  };

  componentDidMount() {
    API.getUsers()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  handleSort = () => {
    if (this.state.sort === "descending" || this.state.sort !== "ascending") {
      this.setState({ sort: "ascending" });
    } else if (
      this.state.sort === "ascending" ||
      this.state.sort !== "descending"
    ) {
      this.setState({ sort: "descending" });
    }
  };

  render() {
    let nameFilter = this.state.results.filter((emp) => {
      return (
        emp.name.last
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    const ascending = (start, finish) => {
      const empFirst = start.name.last.toUpperCase();
      const empLast = finish.name.last.toUpperCase();
      let compare = 0;
      if (empFirst > empLast) {
        compare = 1;
      } else if (empFirst < empLast) {
        compare = -1;
      }
      return compare * 1;
    };

    const descending = (start, finish) => {
      const empFirst = start.name.last.toUpperCase();
      const empLast = finish.name.last.toUpperCase();
      let compare = 0;
      if (empFirst > empLast) {
        compare = 1;
      } else if (empFirst < empLast) {
        compare = -1;
      }
      return compare * -1;
    };

    if (this.state.sort === "ascending") {
      nameFilter.sort(ascending);
    } else if (this.state.sort === "descending") {
      nameFilter.sort(descending);
    }

    return (
      <div className="">
        <form className="text-center">
          <input
            className="text-center"
            type="text"
            placeholder="Employee's Last Name?"
            value={this.state.search}
            onChange={this.handleInputChange.bind(this)}
          />
        </form>
        <br />
        <div className="table-content">
          <div className="row">
            <div className="col-md-1 headings">Photo ID</div>
            <div className="col-md-1 headings">Frist Name</div>
            <div className="col-md-2 headings">
            <button className="btn-info" onClick={this.handleSort}>
              Last Name
            </button>
            </div>
            <div className="col-md-2 headings">Phone Number</div>
            <div className="col-md-3 headings">Email</div>
            <div className="col-md-1 headings">Location</div>
            <div className="col-md-2 headings">DOB</div>
          </div>
          <hr />
          <div>
            <EmpArea nameFilter={nameFilter} />
          </div>
        </div>
      </div>
    );
  };
};

export default UserSearch;
