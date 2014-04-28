'use strict';

angular
  .module('ultraApp')
  .factory('timeline', ['timelineData', function(items) {

    return {
      // specific data format for d3 timeline
      // gets each tag, with a count of the tag
      // occurrences counted for each year. 
      getTagsWithYearlyCount: function() {

        // get all years by plucking unique year props
        // from our timeline items. Should be sorted already 
        // but just in case
        var years = _.unique(_.pluck(items, 'year')).sort();

        var mapped = _.reduce(items, function(result, item) {
          _.each(item.tags, function(tag) {
            result[tag] = result[tag] || [];
            result[tag].push(item.year);
          });
          return result;
        }, {});

        function countByYear(items, year) {
          var count = _.countBy(items, function(i) {
            return i === year;
          });
          return count.true || 0; // lodash count returns true and false counts
        }

        var returnData = _.map(mapped, function(item, key) {
          var xAndYValues = _.map(years, function(year) {
            return {
              x: year,
              y: countByYear(item, year)
            };
          });
          return {
            "key": key,
            "values": xAndYValues
          };
        });

        console.log(returnData);

        return returnData;

      },
      groupItemsByYear: function(selectItems) {
        var grouped = _.groupBy(selectItems, 'year');
        return _.map(grouped, function(items, key) {
          return {
            year: key,
            items: items
          };
        });
      },
      getAllItemsGroupedByYear: function() {
        return this.groupItemsByYear(items);
      },
      getAllItems: function() {
        return items;
      },
      getTags: function() {
        var tags = [];
        _.each(items, function(item) {
          tags = tags.concat(item.tags);
        });
        var counts = _.groupBy(_.compact(tags));
        return _.map(counts, function(item, key) {
          return {
            tag: key,
            count: item.length
          };
        });
      }
    };
  }]);