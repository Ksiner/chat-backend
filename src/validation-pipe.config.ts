import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

function formatValidationErrorDeeply(error: ValidationError) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, target, ...restError } = error;
  const res = restError;

  if (restError.children) {
    res.children = restError.children.map(formatValidationErrorDeeply);
  }

  return res;
}

export const handleValidationErrors = (errors: ValidationError[]) => {
  return new BadRequestException({
    statusCode: 400,
    error: 'Bad Request',
    message: 'Validation failed',
    errors: errors.map(formatValidationErrorDeeply),
  });
};

export const VALIDATION_OPTIONS = {
  skipMissingProperties: true,
  whitelist: true,
  validationError: {
    target: false,
    value: false,
  },
  exceptionFactory: handleValidationErrors,
};
