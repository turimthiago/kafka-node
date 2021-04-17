#!/bin/sh
echo "Start: Sleep 15 seconds"
sleep 30;
wait;
echo "Begin creating topics"
chmod +x /usr/local/bin/topics.sh
sh -c "kafka-topics --create --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1 --topic notification-email-3-1"