export enum PageTitlePositioning {
  AppendPageTitle = 0, // Thêm tiêu đề trang
  PrependPageTitle = 10, // Đặt tiêu đề trang lên đầu
}

/**
 * Giao diện mô tả thông tin meta cho ứng dụng.
 */
export interface IMeta {
  /** Vị trí tiêu đề trang. */
  pageTitlePositioning: PageTitlePositioning;
  /** Ký tự phân cách tiêu đề trang. */
  titleSeparator?: string;
  /** Tên ứng dụng. */
  appName?: string;
  /** URL của ứng dụng. */
  appUrl?: string;
  /** Các giá trị mặc định cho meta. */
  defaults?: {
    /** Tiêu đề mặc định. */
    title?: string;
    /** Mô tả mặc định. */
    description?: string;
    /** Từ khóa mặc định. */
    keywords?: string;
    [key: string]: string | undefined; // Các thuộc tính tùy chọn khác
  };
}
