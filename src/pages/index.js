"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var prop_types_1 = require("prop-types");
var react_helmet_1 = require("react-helmet");
var components_1 = require("components");
var layouts_1 = require("layouts");
var index_module_scss_1 = require("./index.module.scss");
var Index = function (_a) {
    var data = _a.data;
    var edges = data.allMarkdownRemark.edges;
    return (<layouts_1.Layout>
      <react_helmet_1["default"] title={'Home'}/>
      <components_1.Header title="Ananto Ghosh">Articles about simple tech</components_1.Header>
      <section>
        <h2 className={index_module_scss_1["default"].title}>Recent Articles</h2>
        <div className={index_module_scss_1["default"].postWrapper}>
          {edges.map(function (_a) {
        var node = _a.node;
        return (<components_1.PostCard key={node.id} cover={node.frontmatter.cover.childImageSharp.fluid} path={node.frontmatter.path} title={node.frontmatter.title} date={node.frontmatter.date} excerpt={node.frontmatter.description} tags={node.frontmatter.tags}/>);
    })}
        </div>
        <div className={index_module_scss_1["default"].button}>
          <gatsby_1.Link to="/blog">View All Articles</gatsby_1.Link>
        </div>
      </section>
    </layouts_1.Layout>);
};
exports["default"] = Index;
Index.propTypes = {
    data: prop_types_1["default"].shape({
        allMarkdownRemark: prop_types_1["default"].shape({
            edges: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
                node: prop_types_1["default"].shape({
                    excerpt: prop_types_1["default"].string,
                    frontmatter: prop_types_1["default"].shape({
                        cover: prop_types_1["default"].object.isRequired,
                        path: prop_types_1["default"].string.isRequired,
                        title: prop_types_1["default"].string.isRequired,
                        date: prop_types_1["default"].string.isRequired,
                        tags: prop_types_1["default"].array
                    })
                })
            }).isRequired)
        })
    })
};
exports.query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    allMarkdownRemark(\n      limit: 6\n      filter: { frontmatter: { draft: { eq: false } } }\n      sort: { order: DESC, fields: [frontmatter___date] }\n    ) {\n      edges {\n        node {\n          id\n          excerpt(pruneLength: 75)\n          frontmatter {\n            title\n            path\n            tags\n            description\n            date(formatString: \"DD-MMM-YYYY\")\n            cover {\n              childImageSharp {\n                fluid(\n                  maxWidth: 1000\n                  quality: 90\n                  traceSVG: { color: \"#2B2B2F\" }\n                ) {\n                  ...GatsbyImageSharpFluid_withWebp_tracedSVG\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    allMarkdownRemark(\n      limit: 6\n      filter: { frontmatter: { draft: { eq: false } } }\n      sort: { order: DESC, fields: [frontmatter___date] }\n    ) {\n      edges {\n        node {\n          id\n          excerpt(pruneLength: 75)\n          frontmatter {\n            title\n            path\n            tags\n            description\n            date(formatString: \"DD-MMM-YYYY\")\n            cover {\n              childImageSharp {\n                fluid(\n                  maxWidth: 1000\n                  quality: 90\n                  traceSVG: { color: \"#2B2B2F\" }\n                ) {\n                  ...GatsbyImageSharpFluid_withWebp_tracedSVG\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
