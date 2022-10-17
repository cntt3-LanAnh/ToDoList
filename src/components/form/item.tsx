import { Form, FormItemProps } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';

export function FormItem({ errorMsg, ...props }: { errorMsg?: string } & FormItemProps) {
  return (
    <Form.Item {...props} validateStatus={errorMsg ? 'error' : ''} help={errorMsg}>
      {props.children}
    </Form.Item>
  );
}

export function FormItems({ className, errorMsg, children }: { className?: string; errorMsg: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      {children}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            className="ant-form-item-explain"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p role="alert" className="ant-form-item-explain-error">
              {errorMsg}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
