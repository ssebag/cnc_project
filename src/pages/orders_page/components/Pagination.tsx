interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
  }: PaginationProps) {
    return (
      <div className="flex items-center justify-center gap-2 mt-4">
        {/* Previous */}
        <button
          onClick={() =>
            onPageChange(Math.max(currentPage - 1, 1))
          }
          className="px-3 py-1 border rounded-lg"
          disabled={currentPage === 1}
        >
          السابق
        </button>
  
        {/* Numbers */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
  
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 border rounded-lg ${
                currentPage === page
                  ? "bg-sky-500 text-white"
                  : ""
              }`}
            >
              {page}
            </button>
          );
        })}
  
        {/* Next */}
        <button
          onClick={() =>
            onPageChange(
              Math.min(currentPage + 1, totalPages)
            )
          }
          className="px-3 py-1 border rounded-lg"
          disabled={currentPage === totalPages}
        >
          التالي
        </button>
      </div>
    );
  }