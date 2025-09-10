import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// 验证架构
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);
    
    // TODO: 实际发送邮件逻辑
    // 这里可以集成 Resend, SendGrid 或其他邮件服务
    console.log('Contact form submission:', validated);
    
    // 模拟发送邮件
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry. We will get back to you soon!'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.format()
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'Failed to submit form. Please try again.'
    }, { status: 500 });
  }
}