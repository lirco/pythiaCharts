
/**
 * d3 bar chart directive
 *
 * based on the tutorial from
 * http://www.ng-newsletter.com/posts/d3-on-angular.html
 */

(function () {

  function d3StackedBarChart($window,$timeout,d3Service) {

    return {
      restrict: 'EA',
      scope: {
        data: '='
//        label: '@',
//        onClick: '&'
      },

      link: function(scope, ele, attrs) {

        d3Service.d3().then(function(d3) {

          var renderTimeout;
          var margin = parseInt(attrs.margin) || 20,
            barHeight = parseInt(attrs.barHeight) || 20,
            barPadding = parseInt(attrs.barPadding) || 5;

          var svg = d3.select(ele[0])
            .append('svg')
            .style('width', '100%');

          // Browser onresize event
          $window.onresize = function() {
            scope.$apply();
          };

          // Watch for resize event
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });

          //watch for data changes
          scope.$watch('data', function(newData) {
            scope.render(newData);
          }, true);

          //rendering the chart data
          scope.render = function(data) {
            svg.selectAll('*').remove();

            if (!data) return;
            if (renderTimeout) clearTimeout(renderTimeout);

            renderTimeout = $timeout(function() {
              var margin = {top: 20, right: 20, bottom: 30, left: 40},
                  width = 960 - margin.left - margin.right,
                  height = 500 - margin.top - margin.bottom;

              var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

              var y = d3.scale.linear()
                .rangeRound([height, 0]);

              var color = d3.scale.ordinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

              var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

              var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .tickFormat(d3.format(".2s"));

              var svg = d3.select("body").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

              d3.csv("data.csv", function(error, data) {
                if (error) throw error;

                color.domain(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));

                data.forEach(function(d) {
                  var y0 = 0;
                  d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
                  d.total = d.ages[d.ages.length - 1].y1;
                });

                data.sort(function(a, b) { return b.total - a.total; });

                x.domain(data.map(function(d) { return d.State; }));
                y.domain([0, d3.max(data, function(d) { return d.total; })]);

                svg.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + height + ")")
                  .call(xAxis);

                svg.append("g")
                  .attr("class", "y axis")
                  .call(yAxis)
                  .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 6)
                  .attr("dy", ".71em")
                  .style("text-anchor", "end")
                  .text("Population");

                var state = svg.selectAll(".state")
                  .data(data)
                  .enter().append("g")
                  .attr("class", "g")
                  .attr("transform", function(d) { return "translate(" + x(d.State) + ",0)"; });

                state.selectAll("rect")
                  .data(function(d) { return d.ages; })
                  .enter().append("rect")
                  .attr("width", x.rangeBand())
                  .attr("y", function(d) { return y(d.y1); })
                  .attr("height", function(d) { return y(d.y0) - y(d.y1); })
                  .style("fill", function(d) { return color(d.name); });

                var legend = svg.selectAll(".legend")
                  .data(color.domain().slice().reverse())
                  .enter().append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

                legend.append("rect")
                  .attr("x", width - 18)
                  .attr("width", 18)
                  .attr("height", 18)
                  .style("fill", color);

                legend.append("text")
                  .attr("x", width - 24)
                  .attr("y", 9)
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function(d) { return d; });
                });
            }, 200);
          };
        });
      }};

  }

  angular.module('d3')
    .directive('d3StackedBarChart', ['$window','$timeout','d3Service', d3StackedBarChart])

}());
