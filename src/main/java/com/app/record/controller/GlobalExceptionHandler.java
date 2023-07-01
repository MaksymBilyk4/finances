package com.app.record.controller;

import com.app.record.dto.error.ResponseError;
import com.app.record.exception.AbstractException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Objects;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AbstractException.class)
    public ResponseEntity<Object> handleItemNoFoundException(AbstractException exception) {
        final ResponseError responseError = new ResponseError(exception.getBody().getStatus(), exception.getMessage(), exception.getShow());

        return ResponseEntity.status(exception.getBody().getStatus()).body(responseError);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> onMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        int statusCode = HttpStatus.BAD_REQUEST.value();
        String message = Objects.requireNonNull(exception.getFieldError()).getDefaultMessage();
        String stackTrace = exception.getMessage();
        final ResponseError responseError = new ResponseError(statusCode, message, true, stackTrace);

        return ResponseEntity.status(statusCode).body(responseError);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> internalServerErrorException(Exception exception) {
        final String serverErrorMessage = "Oops, something went wrong, please try later!";
        int statusCode = HttpStatus.INTERNAL_SERVER_ERROR.value();
        final ResponseError responseError = new ResponseError(statusCode, serverErrorMessage, true, exception.getMessage());

        return ResponseEntity.status(statusCode).body(responseError);
    }

}
