export default function Modal({onClose}) {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      <div className="p-6 sm:p-8">
        <div className="mb-8 flex items-center justify-between">
        <div>
          <a
            href="./index.html"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>
            Back to board
          </a>

          <h1 className="text-3xl font-bold text-gray-900 mt-8">Add Task</h1>
          <p className="text-sm text-gray-500">Create a card for your board.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                for="title"
                className="block text-sm font-medium text-gray-700"
              >
                Task Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="e.g. Wireframes"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                for="description"
                className="block text-sm font-medium text-gray-700"
              >
                Task Subtitle / Description
              </label>
              <input
                id="description"
                name="description"
                placeholder="Add context or acceptance criteria"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                for="tag"
                className="block text-sm font-medium text-gray-700"
              >
                Tag
              </label>
              <select
                id="tag"
                name="tag"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
              >
                <option value="design">Design</option>
                <option value="operations">Operations</option>
                <option value="marketing">Marketing</option>
                <option value="creative">Creative</option>
                <option value="development">Development</option>
                <option value="backend">Backend</option>
                <option value="setup">Setup</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="documentation">Documentation</option>
              </select>
            </div>

            <div>
              <label
                for="date"
                className="block text-sm font-medium text-gray-700"
              >
                Due Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label
                for="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
              >
                <option value="todo">To-do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-xl bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
      </div>

    </div>
  </div>
  );
}
