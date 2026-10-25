// classes/slug-helper.ts
//Hàm tạo Slug (Dùng ở cả nơi tạo Link và nơi hiển thị)
export function createSlug(name: string, id: number): string {
  const sanitizedName = name
    .toLowerCase()
    .replace(/[đĐ]/g, 'd')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Bỏ dấu tiếng Việt
    .replace(/[^a-z0-9]+/g, '-') // Thay ký tự lạ bằng -
    .replace(/(^-|-$)+/g, '');   // Xóa dấu - ở đầu và cuối
  return `${sanitizedName}-p${id}`; // Format: ten-san-pham-p1
}
//Hàm tách ID từ Slug (Dùng khi đọc URL)
export function extractIdFromSlug(slug: string): number | null {
  // Tìm các chữ số nằm ở cuối chuỗi sau chữ p
  const match = slug.match(/-p(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
}
// Hàm này giúp xác định loại định danh người dùng truyền vào
export function getIdentityType(identity: string): 'ID' | 'SLUG_WITH_ID' | 'PURE_SLUG' {
  // 1. Kiểm tra nếu là số thuần túy (ví dụ: "1")
  if (!isNaN(Number(identity))) {
    return 'ID';
  }
  // 2. Kiểm tra nếu chứa định dạng pID (ví dụ: "iphone-69-pro-max-p1")
  //Nếu chạy dự án thì chỉ cần đổi dòng 25 (nếu có yêu cầu riêng, còn không thì khỏi)//
  if (identity.includes('-p')) {                      
    const parts = identity.split('-p');
    const lastPart = parts[parts.length - 1];
    if (!isNaN(Number(lastPart))) {
      return 'SLUG_WITH_ID';
    }
  }
  // 3. Còn lại coi là slug chữ thuần túy (ví dụ: "iphone-69-pro-max")
  return 'PURE_SLUG';
}

