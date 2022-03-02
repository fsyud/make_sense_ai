import React from "react";
import { connect } from "react-redux";

interface IProps {}

const EllipseLabelList: React.FC<IProps> = (props) => {
  return <div>EllipseLabelList</div>;
};

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EllipseLabelList);
