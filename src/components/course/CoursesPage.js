import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <li key={index}>{course.title}</li>;
  }

  render() {
    return (
      <div className="container">

        <h1>Courses</h1>

        <div className="row">
          <div className="col-xs-12 col-sm-6">

            <h2>Course List</h2>

            <ol>
              {this.props.courses.map(this.courseRow)}
            </ol>

          </div>
          <div className="col-xs-12 col-sm-6">

            <h2>Add Course</h2>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={this.onTitleChange}
                value={this.state.course.title} />
            </div>

            <div className="form-group text-right">
              <input
                type="submit"
                className="btn btn-primary"
                value="Save"
                onClick={this.onClickSave} />
            </div>

          </div>
        </div>

      </div>
    );
  }

}


CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
