package com.app.record.dto.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.bind.validation.ValidationErrors;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class ResponseError {

    private final int status;
    private final String message;
    private final Boolean show;
    private String stackTrace;
    private List<ValidationError> validationErrors;

    public ResponseError(int status, String message, Boolean show, String stackTrace) {
        this.status = status;
        this.message = message;
        this.show = show;
        this.stackTrace = stackTrace;
    }


}
