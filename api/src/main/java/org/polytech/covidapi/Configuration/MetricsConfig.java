package org.polytech.covidapi.Configuration;

import org.springframework.context.annotation.Configuration;
import io.micrometer.core.aop.TimedAspect;
import org.springframework.context.annotation.Bean;
import io.micrometer.core.instrument.MeterRegistry;

@Configuration
public class MetricsConfig {

    @Bean
    public TimedAspect timedAspect(MeterRegistry registry) {
        return new TimedAspect(registry);
    }
}
