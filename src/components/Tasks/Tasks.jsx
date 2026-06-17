import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import Task from "./Task";

export default function Tasks({ title, tasks, status }) {
  const { dispatch, filterTags } = useTaskContext();
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  // Get current filter for this specific column
  const currentFilter = filterTags?.[status] || '';

  // Get all unique tags from this column's tasks
  const getColumnTags = () => {
    const allTags = tasks.flatMap(task => task.tags);
    return [...new Set(allTags)];
  };

  const columnTags = getColumnTags();

  // Filter tasks by tag for this column only
  const getFilteredTasks = () => {
    if (!currentFilter) return tasks;
    return tasks.filter(task => task.tags.includes(currentFilter));
  };

  // Sort tasks by date
  const getSortedTasks = (filteredTasks) => {
    if (!sortOrder) return filteredTasks;
    
    const sorted = [...filteredTasks];
    if (sortOrder === 'newest') {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === 'oldest') {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    return sorted;
  };

  const filteredTasks = getFilteredTasks();
  const sortedTasks = getSortedTasks(filteredTasks);

  // Handle filter for this specific column
  const handleFilter = (tag) => {
    if (currentFilter === tag) {
      // Clear filter for this column
      dispatch({ 
        type: 'FILTER_TASKS', 
        payload: { status, tag: '' } 
      });
    } else {
      // Set filter for this column
      dispatch({ 
        type: 'FILTER_TASKS', 
        payload: { status, tag } 
      });
    }
    setShowFilter(false);
  };

  // Handle sort
  const handleSort = (order) => {
    setSortOrder(order);
    setShowSort(false);
  };

  // Clear sort
  const clearSort = () => {
    setSortOrder('');
    setShowSort(false);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {sortedTasks.length}
          </span>
          {currentFilter && (
            <span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span>Filter: {currentFilter}</span>
              <button
                onClick={() => handleFilter('')}
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                ×
              </button>
            </span>
          )}
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Filter Button - শুধু মাত্র এই কলামের জন্য */}
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-2 px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none ${
                currentFilter ? 'text-blue-600 border-blue-300 bg-blue-50' : 'text-gray-600'
              }`}
              onClick={() => setShowFilter(!showFilter)}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
              {currentFilter && (
                <span className="ml-1 text-xs bg-blue-500 text-white rounded-full px-1.5 py-0.5">
                  1
                </span>
              )}
            </button>

            {/* Filter Dropdown - শুধু মাত্র এই কলামের Tag গুলো */}
            {showFilter && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40">
                <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Filter by tag
                </p>
                {columnTags.length === 0 ? (
                  <p className="px-4 py-2 text-gray-400 text-sm">No tags available</p>
                ) : (
                  <>
                    <button
                      type="button"
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                        !currentFilter ? 'bg-blue-50 text-blue-700 font-medium' : ''
                      }`}
                      onClick={() => handleFilter('')}
                    >
                      All
                    </button>
                    {columnTags.map(tag => (
                      <button
                        key={tag}
                        type="button"
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                          currentFilter === tag ? 'bg-blue-50 text-blue-700 font-medium' : ''
                        }`}
                        onClick={() => handleFilter(tag)}
                      >
                        <span 
                          className="inline-block w-2 h-2 rounded-full mr-2"
                          style={{ 
                            backgroundColor: getTagColor(tag) 
                          }}
                        />
                        {tag}
                      </button>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Sort Button */}
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-2 px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none ${
                sortOrder ? 'text-blue-600 border-blue-300' : 'text-gray-600'
              }`}
              onClick={() => setShowSort(!showSort)}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M8 12h12M12 18h8"
                />
              </svg>
              Sort
              {sortOrder === 'newest' && <span className="ml-1 text-xs">↓</span>}
              {sortOrder === 'oldest' && <span className="ml-1 text-xs">↑</span>}
            </button>

            {/* Sort Dropdown */}
            {showSort && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40">
                <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Sort by date
                </p>
                <button
                  type="button"
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                    sortOrder === 'newest' ? 'bg-blue-50 text-blue-700 font-medium' : ''
                  }`}
                  onClick={() => handleSort('newest')}
                >
                  Newest first
                </button>
                <button
                  type="button"
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                    sortOrder === 'oldest' ? 'bg-blue-50 text-blue-700 font-medium' : ''
                  }`}
                  onClick={() => handleSort('oldest')}
                >
                  Oldest first
                </button>
                {sortOrder && (
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 border-t border-gray-100 mt-2 pt-2"
                    onClick={clearSort}
                  >
                    Clear sort
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Task List - Filtered and Sorted */}
      <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
        {sortedTasks.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
            {currentFilter ? (
              <>
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-500">
                  No tasks found with tag <strong className="text-gray-700">"{currentFilter}"</strong>
                </p>
                <button
                  onClick={() => handleFilter('')}
                  className="mt-3 text-sm text-blue-500 hover:text-blue-700 font-medium"
                >
                  Clear filter
                </button>
              </>
            ) : (
              <>
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-sm text-gray-500">No tasks in {title}</p>
              </>
            )}
          </div>
        ) : (
          sortedTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}

// Helper function for tag colors
function getTagColor(tag) {
  const colors = {
    "Design": "#4A90E2",
    "Development": "#27AE60",
    "UI/UX": "#9B59B6",
    "Backend": "#E67E22",
    "Frontend": "#3498DB",
    "Testing": "#E74C3C",
    "Documentation": "#1ABC9C",
    "Database": "#F39C12",
    "Planning": "#2ECC71",
    "Operations": "#FF6B6B",
    "Marketing": "#FF9F43",
    "Creative": "#A29BFE",
    "Setup": "#00CEC9",
    "Infrastructure": "#6C5CE7"
  };
  return colors[tag] || "#6c757d";
}