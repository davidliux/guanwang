interface EmailData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // 模拟邮件发送
    // 在生产环境中，这里应该集成实际的邮件服务（如 SendGrid、AWS SES、Resend 等）
    console.log('Sending email with data:', data);
    
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟成功响应
    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email'
    };
  }
}