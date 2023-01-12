package org.polytech.covidapi.security;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Refill;
import org.springframework.context.annotation.Bean;
import io.github.bucket4j.Bucket;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;

@Configuration
public class SecurityConfiguration {

    @Bean
    public Bucket bucket() {
         return Bucket.builder()
             .addLimit(Bandwidth.classic(10, Refill.greedy(10, Duration.ofMinutes(1))))
             .build();
    }
}
