import React, { useState } from 'react';

interface Student {
  id: number;
  name: string;
  role: string;
  image?: string;
}

const studentList: Student[] = [
  { id: 1, name: 'Cô Tạ Uyên Vy', role: 'GVCN Năm Học 2021 - 2022', image: 'https://i.ibb.co/21FBYtZn/covy.jpg' },
  { id: 2, name: 'Cô Huyền Anh', role: 'GVCN Năm Học 2022 - 2023', image: 'https://i.ibb.co/KjRnV8QS/cohuyenanh.jpg' },
  { id: 3, name: 'Cô Nguyễn Thị Đào', role: 'GVCN Năm Học 2023 - 2024', image: 'https://i.ibb.co/Kp7xRKWm/codao.jpg' },
  { id: 4, name: 'Cô Phạm Thị Thanh Thủy', role: 'GVCN Năm Học 2024 - 2025', image: 'https://i.ibb.co/5hNjCCHw/cothuy.jpg' },
  { id: 5, name: 'Huỳnh Ngọc Quỳnh Anh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Nguyễn Hồng Minh Anh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, name: 'Phạm Quỳnh Anh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, name: 'Nguyễn Vĩnh Thiên Ấn', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, name: 'Nguyễn Hùng Dũng', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 10, name: 'Nguyễn Quốc Huy', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 11, name: 'Nguyễn Trần Nguyên Khang', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 12, name: 'Trương Nhật Minh Khang', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 13, name: 'Nguyễn Hồng Phương Khanh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 14, name: 'Phạm Phước Khoa', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 15, name: 'Bùi Trình Minh Khuê', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 16, name: 'Trịnh Quán Lâm', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 17, name: 'Nguyễn Hoàng Mai', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 18, name: 'Lê Phước Nhật Minh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 19, name: 'Phạm Đăng Minh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 20, name: 'Đặng Bảo Ngọc', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 21, name: 'Phùng Vân Khánh Ngọc', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 22, name: 'Trần Thiện Nhân', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 23, name: 'Vũ Minh Gia Phúc', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 24, name: 'Nguyễn Thiện Hạnh Thảo', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 25, name: 'Hồ Khoa Phước Thịnh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 26, name: 'Nguyễn Huỳnh Anh Thư', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 27, name: 'Đỗ Thị Phương Uyên', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 28, name: 'Nguyễn Hồ Thanh Vân', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 29, name: 'Nguyễn Quý Thanh Vân', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 30, name: 'Ngô Trần Phương Vy', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 31, name: 'Chung Tiến Phát', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 32, name: 'Danh Thiên Kim', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 33, name: 'Nguyễn Cảnh Khôi', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 34, name: 'Nguyễn Hà Anh Duy', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 35, name: 'Đường Minh Thùy Anh', role: 'Học sinh', image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

function ClassMembers() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const teachers = studentList.filter(student => student.role.includes('GVCN'));
  const students = studentList.filter(student => student.role === 'Học sinh');

  if (selectedStudent) {
    return (
      <div className="text-blue-200">
        <button
          onClick={() => setSelectedStudent(null)}
          className="mb-8 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Class Members</span>
        </button>
        
        <div className="bg-black/50 backdrop-blur-xl rounded-lg p-8 border border-blue-900/30">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
                {selectedStudent.name}
              </h2>
              <p className="text-blue-400/70 mb-4">{selectedStudent.role}</p>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src={selectedStudent.image}
                alt={selectedStudent.name}
                className="w-full h-64 object-cover rounded-lg border border-blue-900/30"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-blue-200">
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
        Class Members
      </h2>
      <div className="space-y-8">
        {/* Teachers Section */}
        <div className="bg-black/50 backdrop-blur-xl rounded-lg p-8 border border-blue-900/30">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Teachers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="p-4 rounded-lg bg-blue-900/20 hover:bg-blue-900/30 transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedStudent(teacher)}
              >
                <h3 className="text-blue-300 font-semibold">{teacher.name}</h3>
                <p className="text-blue-400/70 text-sm">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Students Section */}
        <div className="bg-black/50 backdrop-blur-xl rounded-lg p-8 border border-blue-900/30">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="p-4 rounded-lg bg-blue-900/20 hover:bg-blue-900/30 transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedStudent(student)}
              >
                <h3 className="text-blue-300 font-semibold">{student.name}</h3>
                <p className="text-blue-400/70 text-sm">{student.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassMembers;